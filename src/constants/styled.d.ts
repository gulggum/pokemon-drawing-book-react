import "styled-components";
import { Theme } from "./theme"; // 너의 theme 파일 경로

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
