import "./styles/index.css";

import type { Content, Editor } from "@tiptap/react";
import { EditorContent } from "@tiptap/react";
import * as React from "react";

import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

import { LinkBubbleMenu } from "./components/bubble-menu/link-bubble-menu";
import SectionFive from "./components/section/five";
import { SectionFour } from "./components/section/four";
import { SectionOne } from "./components/section/one";
import SectionSix from "./components/section/six";
import SectionThree from "./components/section/tree";
import { SectionTwo } from "./components/section/two";
import type { UseMinimalTiptapEditorProps } from "./hooks/use-minimal-tiptap";
import { useMinimalTiptapEditor } from "./hooks/use-minimal-tiptap";

export interface MinimalTiptapProps extends Omit<UseMinimalTiptapEditorProps, "onUpdate"> {
  value?: Content;
  onChange?: (value: Content) => void;
  className?: string;
  editorContentClassName?: string;
}

const Toolbar = ({ editor }: { editor: Editor }) => (
  <div className="shrink-0 overflow-x-auto border-b border-border p-2">
    <div className="flex w-max items-center gap-px">
      <SectionOne editor={editor} activeLevels={[1, 2, 3]} />
      <Separator orientation="vertical" className="mx-2 h-7" />
      <SectionTwo editor={editor} activeActions={["bold", "italic", "underline"]} mainActionCount={3} />
      <Separator orientation="vertical" className="mx-2 h-7" />
      <SectionThree editor={editor} activeActions={["alignLeft", "alignCenter", "alignRight"]} mainActionCount={3} />
      <Separator orientation="vertical" className="mx-2 h-7" />
      <SectionSix editor={editor} />
      <Separator orientation="vertical" className="mx-2 h-7" />
      <SectionFour editor={editor} activeActions={["orderedList", "bulletList"]} mainActionCount={2} />
      <Separator orientation="vertical" className="mx-2 h-7" />
      <SectionFive editor={editor} />
    </div>
  </div>
);

export const MinimalTiptapEditor = React.forwardRef<HTMLDivElement, MinimalTiptapProps>(
  ({ value, onChange, className, editorContentClassName, ...props }, ref) => {
    const editor = useMinimalTiptapEditor({
      immediatelyRender: false,
      value,
      onUpdate: onChange,
      ...props,
    });

    if (!editor) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex h-auto min-h-72 w-full flex-col overflow-hidden rounded-lg border border-input border-slate-200 font-normal shadow-sm transition duration-300 focus-within:border-[#C2B59B]",
          className,
        )}
      >
        <Toolbar editor={editor} />
        <EditorContent editor={editor} className={cn("minimal-tiptap-editor overflow-auto break-words", editorContentClassName)} />
        <LinkBubbleMenu editor={editor} />
      </div>
    );
  },
);

MinimalTiptapEditor.displayName = "MinimalTiptapEditor";
export default MinimalTiptapEditor;
