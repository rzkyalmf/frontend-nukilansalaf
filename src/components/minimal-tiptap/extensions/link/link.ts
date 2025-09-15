import { Link as TiptapLink } from '@tiptap/extension-link'

export const Link = TiptapLink.configure({
  openOnClick: false,
  HTMLAttributes: {
    class: 'link',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
})

export default Link