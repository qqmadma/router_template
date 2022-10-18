/// <reference types="react-scripts"/>

//支持.module.sass
declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}