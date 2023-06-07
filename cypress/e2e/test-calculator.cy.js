describe('Testing calculator app with positive  Test cases', () => {
  
  it('test calcualtor addition',() => {
    cy.fixture('inputs').then((inputs) => {
      for (var x in inputs[0].datas.data) {
        cy.calculate(inputs[0].datas.data[x].input1, inputs[0].datas.data[x].input2)
        cy.get('.form-inline > .ng-binding').contains(inputs[0].datas.data[x].output[0])
      }
    })
  })

  it('test calcualtor subraction',() => {
    cy.fixture('operations').then((operations) => {
      cy.selection(operations.five[0],operations.five[1])
    })
    cy.fixture('inputs').then((inputs) => {
      for (var x in inputs[0].datas.data) {
        cy.calculate(inputs[0].datas.data[x].input1, inputs[0].datas.data[x].input2)
        cy.get('.form-inline > .ng-binding').contains(inputs[0].datas.data[x].output[4])
      }
    })
  })

  it('test calcualtor multiplication',() => {
  cy.fixture('operations').then((operations) => {
    cy.selection(operations.four[1],operations.four[0])
  })
  cy.fixture('inputs').then((inputs) => {
    for (var x in inputs[0].datas.data) {
      cy.calculate(inputs[0].datas.data[x].input1, inputs[0].datas.data[x].input2)
        cy.get('.form-inline > .ng-binding').contains(inputs[0].datas.data[x].output[3])
    }
  })
})
it('test calcualtor division',() => {
  cy.fixture('operations').then((operations) => {
    cy.selection(operations.two[1],operations.two[0])
  })
  cy.fixture('inputs').then((inputs) => {
    for (var x in inputs[0].datas.data) {
      cy.calculate(inputs[0].datas.data[x].input1, inputs[0].datas.data[x].input2)
        cy.get('.form-inline > .ng-binding').contains(inputs[0].datas.data[x].output[1])
    }
  })
})
it('test calcualtor reminder',() => {
  cy.fixture('operations').then((operations) => {
    cy.selection(operations.three[1],operations.three[0])
  })
  cy.fixture('inputs').then((inputs) => {
    for (var x in inputs[0].datas.data) {
      cy.calculate(inputs[0].datas.data[x].input1, inputs[0].datas.data[x].input2)
        cy.get('.form-inline > .ng-binding').contains(inputs[0].datas.data[x].output[2])
    }
  })
})
})
