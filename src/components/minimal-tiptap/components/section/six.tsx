import type { Editor } from "@tiptap/react";
import type { VariantProps } from "class-variance-authority";
import { ChevronDown, Type } from "lucide-react";
import * as React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { toggleVariants } from "@/components/ui/toggle";

import ToolbarButton from "../toolbar-button";

interface SectionSixProps extends VariantProps<typeof toggleVariants> {
  editor: Editor;
}

// Font sizes in pixels
const FONT_SIZES = [
  { label: "Kecil", value: "12px" },
  { label: "Normal", value: "14px" },
  { label: "Sedang", value: "18px" },
  { label: "Besar", value: "24px" },
];

export const SectionSix: React.FC<SectionSixProps> = ({ editor, size, variant }) => {
  // Function to get current font size from editor
  const getCurrentFontSize = (): string => {
    // Get the current text style mark
    const mark = editor.getAttributes("textStyle");
    return mark.fontSize || "14px";
  };

  const [fontSize, setFontSize] = React.useState<string>(getCurrentFontSize());

  // Update the fontSize state when the selection changes
  React.useEffect(() => {
    const updateFontSize = () => {
      setFontSize(getCurrentFontSize());
    };

    editor.on("selectionUpdate", updateFontSize);
    editor.on("transaction", updateFontSize);

    return () => {
      editor.off("selectionUpdate", updateFontSize);
      editor.off("transaction", updateFontSize);
    };
  });

  // Function to handle font size change
  const handleFontSizeChange = (value: string) => {
    editor.chain().focus().setFontSize(value).run();
    setFontSize(value);
  };

  // Find the font size label to display
  const currentFontSizeLabel = FONT_SIZES.find((item) => item.value === fontSize)?.label || "Normal";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div>
          <ToolbarButton size={size} variant={variant} tooltip="Ukuran Font">
            <div className="flex items-center gap-1">
              <Type className="h-4 w-4" />
              <ChevronDown className="h-3 w-3" />
            </div>
          </ToolbarButton>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuRadioGroup value={fontSize} onValueChange={handleFontSizeChange}>
          {FONT_SIZES.map((item) => (
            <DropdownMenuRadioItem key={item.value} value={item.value}>
              <span style={{ fontSize: item.value }}>{item.label}</span>
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

SectionSix.displayName = "SectionSix";
export default SectionSix;
