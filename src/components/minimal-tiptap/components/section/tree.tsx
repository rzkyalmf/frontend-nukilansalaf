import type { Editor } from "@tiptap/react";
import type { VariantProps } from "class-variance-authority";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import * as React from "react";

import type { toggleVariants } from "@/components/ui/toggle";

import ToolbarButton from "../toolbar-button";

interface SectionThreeProps extends VariantProps<typeof toggleVariants> {
  editor: Editor;
  activeActions?: ("alignLeft" | "alignCenter" | "alignRight")[];
  mainActionCount?: number;
}

export const SectionThree: React.FC<SectionThreeProps> = ({
  editor,
  size,
  variant,
  activeActions = ["alignLeft", "alignCenter", "alignRight"],
  mainActionCount = 3,
}) => {
  const actions = [
    {
      name: "alignLeft",
      icon: AlignLeft,
      tooltip: "Rata Kiri",
      action: () => editor.chain().focus().setTextAlign("left").run(),
      isActive: () => editor.isActive({ textAlign: "left" }),
    },
    {
      name: "alignCenter",
      icon: AlignCenter,
      tooltip: "Rata Tengah",
      action: () => editor.chain().focus().setTextAlign("center").run(),
      isActive: () => editor.isActive({ textAlign: "center" }),
    },
    {
      name: "alignRight",
      icon: AlignRight,
      tooltip: "Rata Kanan",
      action: () => editor.chain().focus().setTextAlign("right").run(),
      isActive: () => editor.isActive({ textAlign: "right" }),
    },
  ];

  const visibleActions = actions.filter((action) => activeActions.includes(action.name as any));

  return (
    <>
      {visibleActions.slice(0, mainActionCount).map((action) => {
        const Icon = action.icon;
        return (
          <ToolbarButton
            key={action.name}
            size={size}
            variant={variant}
            isActive={action.isActive()}
            onClick={action.action}
            tooltip={action.tooltip}
          >
            <Icon className="h-4 w-4" />
          </ToolbarButton>
        );
      })}
    </>
  );
};

SectionThree.displayName = "SectionThree";
export default SectionThree;
