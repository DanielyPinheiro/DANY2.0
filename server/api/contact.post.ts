import { Resend } from 'resend'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    email?: string
    tipo?: string
    mensagem?: string
    _hp?: string
    _t?: number
    source?: string
  }>(event)

  // Honeypot: campo preenchido = bot
  if (body._hp) {
    return { ok: true }
  }

  // Anti-spam: submit em menos de 2s = bot
  if (typeof body._t === 'number' && body._t < 2000) {
    return { ok: true }
  }

  const name = (body.name ?? '').trim()
  const email = (body.email ?? '').trim()
  const tipo = (body.tipo ?? '').trim()
  const mensagem = (body.mensagem ?? '').trim()

  if (!name || name.length > 80) {
    return { ok: false, error: 'Nome inválido.' }
  }
  if (!email || !EMAIL_REGEX.test(email)) {
    return { ok: false, error: 'E-mail inválido.' }
  }
  if (!tipo) {
    return { ok: false, error: 'Tipo de demanda obrigatório.' }
  }
  if (!mensagem || mensagem.length > 2000) {
    return { ok: false, error: 'Mensagem inválida.' }
  }

  const apiKey = process.env.RESEND_API_KEY
  const to = process.env.CONTACT_TO_EMAIL || process.env.SITE_EMAIL

  if (!apiKey || !to) {
    console.error('[contact] Env vars ausentes: RESEND_API_KEY ou CONTACT_TO_EMAIL')
    return { ok: false, error: 'Configuração de envio ausente.' }
  }

  const resend = new Resend(apiKey)

  const { error } = await resend.emails.send({
    from: 'DataGlow Site <onboarding@resend.dev>',
    to,
    replyTo: email,
    subject: `Novo briefing do site — ${tipo}`,
    text: [
      `Nome: ${name}`,
      `E-mail: ${email}`,
      `Tipo: ${tipo}`,
      `Origem: ${body.source ?? 'site'}`,
      '',
      mensagem,
    ].join('\n'),
  })

  if (error) {
    console.error('[contact] Resend error:', error.name)
    return { ok: false, error: 'Falha no envio.' }
  }

  return { ok: true }
})
