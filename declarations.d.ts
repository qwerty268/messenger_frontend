declare module '*.handlebars' {
    const content: (context?: object) => string;
    export default content;
}
declare module '*.hbs' {
    const content: (context?: object) => string;
    export default content;
}
declare module '*.scss' {
    const content: Record<string, string>;
    export default content;
}