'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'faq-2',
            icon: 'timer',
            question: 'How long does it take to launch a site?',
            answer: 'It depends on the project scope — simple sites can take a few weeks, while complex builds may take a bit longer. We always give clear timelines upfront, so no surprises.',
          },

          {
            id: 'faq-3',
            icon: 'credit-card',
            question: 'What will it cost me?',
            answer: 'We offer packages based on your goals and needs. Whether you’re a startup or scaling up, we’ll work within your budget and provide transparent pricing from day one.',
          },

        {
            id: 'faq-1',
            icon: 'layout-dashboard',
            question: 'What kind of websites do you build?',
            answer: 'From restaurant reservations to online orders, real estate listings to full-blown eCommerce — we build it all. Whether you need a booking system, a product catalog, or just a killer homepage, we tailor every website to fit your business like a glove. No templates, no fluff — just results.'

          },
         
          {
            id: 'faq-4',
            icon: 'rocket',
            question: 'Will my website be fast and mobile-friendly?',
            answer: 'Absolutely. Every site we build is fully responsive and optimized for speed. Because your users (and Google) expect nothing less.',
          },
          {
            id: 'faq-5',
            icon: 'search',
            question: 'Do you offer SEO services?',
            answer: 'Yes — technical SEO is built into every project. We also offer ongoing SEO support and strategy if you’re looking to grow your organic reach.',
          },
          {
            id: 'faq-6',
            icon: 'user',
            question: 'Can you help with branding and content too?',
            answer: 'Of course. We work closely with designers, copywriters, and strategists to make sure your site tells your story clearly and effectively.',
          },
          {
            id: 'faq-7',
            icon: 'cog',
            question: 'What if I need updates or help after launch?',
            answer: 'We offer ongoing support and maintenance plans to keep your site fresh, secure, and running smoothly — so you can focus on your business.',
          },
          {
            id: 'faq-8',
            icon: 'laptop',
            question: 'Do you use AI or modern tools?',
            answer: 'Yes — we blend the best of human creativity with smart tools like AI and automation to build faster and better, without compromising quality.',
          },
          
    ]

    return (
        <section className="bg-muted dark:bg-background py-20">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">
                    <div className="md:w-1/3">
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can't find what you're looking for? Contact our{' '}
                                <Link
                                    href="/contactus"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <Accordion
                            type="single"
                            collapsible
                            className="w-full space-y-2">
                            {faqItems.map((item) => (
                                <AccordionItem
                                    key={item.id}
                                    value={item.id}
                                    className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                    <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                                        <div className="flex items-center gap-3">
                                            <div className="flex size-6">
                                                <DynamicIcon
                                                    name={item.icon}
                                                    className="m-auto size-4"
                                                />
                                            </div>
                                            <span className="text-base">{item.question}</span>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-5">
                                        <div className="px-9">
                                            <p className="text-base">{item.answer}</p>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
    )
}
