import useGlobalProperties from "@/hooks/useGlobalProperties";
import type { TProps } from "@/types/common.type";

export default function useLogo(props: TProps) {
  const _ = useGlobalProperties();
  let size = props?.size || 32;

  const styles = {
    width: size + "px",
    height: size + "px",
    border: props.hasBorder ? `10px solid ${_.$COLOR.brand_light}` : "",
  };

  return { styles };
}
