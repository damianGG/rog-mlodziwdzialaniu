"use client"

import { BlocksRenderer, type BlocksContent } from '@strapi/blocks-react-renderer';
import Link from 'next/link';

export default function BlockContent({ content }: { content: BlocksContent }) {
    return <BlocksRenderer
        content={content}
        blocks={{
            // Paragraph with custom class
            paragraph: ({ children }) => <p className="mt-3 mb-3">{children}</p>,
            // Link with custom component (assuming Next.js Link)
            link: ({ children, url }) => <Link className="link-primary" href={url}>{children}</Link>,
            // Unordered list with custom class
            list: ({ children }) => <ul className="icon-list bullet-bg bullet-soft-primary mb-3 mt-3">{children}</ul>,
            // List item with custom class and icon
            'list-item': ({ children }) => <li><i className="uil uil-check"></i>{children}</li>,
        }}
        modifiers={{
            bold: ({ children }) => <strong>{children}</strong>,
            italic: ({ children }) => <span className="italic">{children}</span>,
        }}

    />;
}
