var formCreate = [
    { template: "Crear Cuenta", type: "section" },
    {
      cols: [
        {
          labelPosition: "left",
          labelWidth: 150,
          rows: [
            { id: 'names',labelWidth: 150, width: 350, view: 'text', label: 'Nombres Completos' },
            { id: 'identification', labelWidth: 150, width: 250, label: 'Identificación', view: 'text' },
            { id: 'email', labelWidth: 150, width: 250, label: 'Correo', view: 'text' }
          ],
        },
        {
          rows: [
            { id: 'reason_socail', labelWidth: 100, width: 250, label: 'Razón Social', view: 'text' },
            { id: 'phones', width: 250, labelWidth: 100, label: 'Telefonos', view: 'text' },
            { id: 'direcction', labelWidth: 100, width: 250, label: 'Direccion', view: 'text' }
          ]
        }
      ]
  
    },
    { id: 'btnAceptar', width: 200, label: 'Aceptar', view: 'button', css: "webix_primary" }
  ]
  
  var create_account = {
    view: "form",
    id: 'createAccount',
    width: 600,
    url: function (params) {
      return webix.ajax().post('users/create_account', $$('createAccount').getValues())
    },
    datatype: 'json',
    elements: formCreate
  }
  
  
  webix.ready(function () {
    webix.ui({
      cols: [
        create_account
      ]
    })
  })
  
  