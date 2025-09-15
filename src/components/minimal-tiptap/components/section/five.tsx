import type { Editor } from "@tiptap/react";
import type { VariantProps } from "class-variance-authority";
import * as React from "react";

import type { toggleVariants } from "@/components/ui/toggle";

import { LinkEditPopover } from "../link/link-edit-popover";

interface SectionFiveProps extends VariantProps<typeof toggleVariants> {
  editor: Editor;
  mainActionCount?: number;
}

export const SectionFive: React.FC<SectionFiveProps> = ({ editor, size, variant }) => {
  return (
    <>
      <LinkEditPopover editor={editor} size={size} variant={variant} />
    </>
  );
};

SectionFive.displayName = "SectionFive";

export default SectionFive;
