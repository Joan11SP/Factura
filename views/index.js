
var form = {
    view: "form",
    id: 'id_form',
    autoConfig: true,
    elements: [
        {
            id: 'txtEntrada',
            width: 80,
            type: 'text',
            placeHolder: "names",
        },
        {
            id: 'btnAceptar',
            type: 'button',
            label: 'Aceptar'
        }
    ]
}

webix.ready(function () {
    webix.ui({
        cols: [
            form
        ]
    })
})