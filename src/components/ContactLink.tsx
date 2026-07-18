'use client'

import { trackEvent } from '@/lib/analytics'

export const PHONE_HREF = 'tel:+31636278515'
export const WHATSAPP_HREF = 'https://wa.me/31636278515'

type Props = {
  /** Bepaalt zowel de href als het GA4-event. */
  type: 'phone' | 'whatsapp'
  /** Waar op de site de klik plaatsvond, bv. 'navbar' of 'footer'. */
  location: string
  className?: string
  children: React.ReactNode
  'aria-label'?: string
  /** Extra actie naast de meting, bv. het sluiten van het mobiele menu. */
  onClick?: () => void
}

/**
 * Eén component voor alle bel- en WhatsApp-links op de site. Het is een
 * client-component, zodat pagina's en componenten die hem gebruiken zelf
 * server-component kunnen blijven.
 */
export default function ContactLink({
  type,
  location,
  className,
  children,
  onClick,
  ...rest
}: Props) {
  const isPhone = type === 'phone'

  function handleClick() {
    trackEvent(isPhone ? 'click_telefoon' : 'click_whatsapp', {
      event_category: 'contact',
      event_label: location,
      link_url: isPhone ? PHONE_HREF : WHATSAPP_HREF,
    })
    onClick?.()
  }

  return (
    <a
      href={isPhone ? PHONE_HREF : WHATSAPP_HREF}
      onClick={handleClick}
      className={className}
      {...(isPhone ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    >
      {children}
    </a>
  )
}
