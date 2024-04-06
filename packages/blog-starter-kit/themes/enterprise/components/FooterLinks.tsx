import Link from 'next/link'
import React from 'react'

export function FooterLinks() {
  const data = [
    {
      title: 'Product',
      items: [
        { text: 'How It Works', href: '/#how-it-works' },
        { text: 'Features', href: '/#features' },
        { text: 'Reviews', href: '/#reviews' },
        { text: 'Pricing', href: '/#pricing' },
        { text: 'FAQs', href: '/#faqs' },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          text: 'Team',
          href: 'https://linkedin.com/company/aplicableai/people',
          isBlank: true,
        },
        {
          text: 'Careers',
          href: 'https://linkedin.com/company/aplicableai/jobs',
          isBlank: true,
        },
        {
          text: 'LinkedIn',
          href: 'https://linkedin.com/company/aplicableai',
          isBlank: true,
        },
      ],
    },
    {
      title: 'Support',
      items: [
        { text: 'Code Privacy', href: '/code-privacy' },
        {
          text: 'Talk to us',
          href: 'https://cal.com/mackeyvazquez/aplicable-ai-customer-support',
          isBlank: true,
        },
        {
          text: 'Chat with us',
          href: 'https://wa.me/447861675824',
          isBlank: true,
        },
      ],
    },
  ]

  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {data.map((section, index) => (
          <li key={index}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex} className="mt-4">
                  <Link
                    key={item.text}
                    href={item.href}
                    target={item.isBlank ? '_blank' : '_self'}
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:rounded-lg hover:bg-gray-100 hover:text-gray-900 hover:delay-0"
                  >
                    <span className="relative z-10">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  )
}
