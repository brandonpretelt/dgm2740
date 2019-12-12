#!/bash/bin

echo '@import "reset";\n@import "variables";\n@import "small-default";\n
@media only screen and (min-width: 35rem) {
    @import "medium";
}\n
@media only screen and (min-width: 75rem) {
    @import "large";
}' > styles.scss

