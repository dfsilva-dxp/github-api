import { ComponentProps } from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { ShoppingCart } from "phosphor-react";

import Button from ".";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    size: {
      name: "Button size",
      type: { name: "string" },
      description: "Opções de tamanho para o componente Button",
      options: ["sm", "md", "lg"],
      control: { type: "select" },
      table: {
        defaultValue: {
          summary: "md"
        },
        type: {
          summary: "Mostrar opções de tamanho para o logo",
          detail: "sm (small), md (medium), lg (large)"
        }
      }
    },
    children: {
      description: "O children define o conteúdo do button.",
      table: {
        type: {
          summary: "Tipos de children",
          detail: "string, img, svg, jsx"
        }
      }
    },
    fullWidth: {
      description:
        "Essa propriedade define se o button ocupará 100% do tamanho do elemento pai."
    },
    icon: {
      description:
        "com essa propriedade é possível renderizar um icon no button"
    }
  },
  args: {
    size: "md"
  },
  parameters: {
    layout: "centered"
  }
} as Meta;

export const Default: Story<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button {...props} />
);

Default.args = {
  children: "Buy now",
  fullWidth: false,
  icon: "",
  minimal: false
};

export const OnlyIcon: Story<ComponentProps<typeof Button>> = ({
  ...props
}) => <Button {...props} />;

OnlyIcon.args = {
  icon: <ShoppingCart />,
  fullWidth: false,
  minimal: false
};

export const Minimal: Story<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button {...props} />
);

Minimal.args = {
  children: "Buy now",
  icon: <ShoppingCart />,
  fullWidth: false,
  minimal: true
};

export const AsLink: Story<ComponentProps<typeof Button>> = ({ ...props }) => (
  <Button {...props} />
);

AsLink.args = {
  children: "Buy now",
  icon: "",
  fullWidth: false,
  minimal: true,
  as: "a",
  href: "/link"
};
