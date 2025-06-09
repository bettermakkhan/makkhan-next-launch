import React from "react";
import { Select, Tag } from "antd";
import type { SelectProps } from "antd";

type TagRender = SelectProps["tagRender"];

export const layout = {
  labelCol: { span: 7 },
  wrapperCol: { span: 20 },
};

const TAG_COLORS = [
  "magenta",
  "red",
  "volcano",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "geekblue",
  "purple",
];

export const tagRender: TagRender = (props: any) => {
  const { label, closable, onClose } = props;

  const colorIndex =
    Math.abs(
      Array.from(label).reduce(
        (acc, char: any) => acc + char.charCodeAt(0),
        0
      ) as number
    ) % TAG_COLORS.length;

  const onPreventMouseDown = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault();
    event.stopPropagation();
  };
  return (
    <Tag
      color={TAG_COLORS[colorIndex]}
      onMouseDown={onPreventMouseDown}
      closable={closable}
      onClose={onClose}
      style={{ marginInlineEnd: 4 }}
    >
      {label}
    </Tag>
  );
};
