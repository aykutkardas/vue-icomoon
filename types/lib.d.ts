import { AllowedComponentProps, ComponentCustomProps, VNodeProps } from "vue";

export interface IcomoonProps {
  iconSet: Record<any, any>;
  icon: string;
  color?: string;
  size?: number;
  disableFill?: boolean;
  removeInitialStyle?: boolean;
  style: Record<any, any>;
}

export declare const Icomoon: {
  new (): {
    $props: AllowedComponentProps & ComponentCustomProps & VNodeProps & IcomoonProps;
  };
};

export declare const iconList: (iconSet: Record<any, any>) => string[] | null;
