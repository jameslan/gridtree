type templateResult

@bs.module("lit-element") external html: (. array<string>) => templateResult = "html"

let _gridTree = () => {
    let render = () => {
        html (. "",  "")
    }
}