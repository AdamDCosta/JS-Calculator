describe('testing my calculator', () => {
  it('checking cypress is working', () => {
    expect(true).to.equal(true)
  })

  it('1 + 2 equals 3', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "3");

  })

  it('5 minus 3 equals 2', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=minus]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=equals]').click();

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "2");

  })

  it('10 times 2 equals 20', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "20");

  })

  it('10 divided 2 equals 5', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=divide]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "5");

  })

  it('100 times 20 equals 2000', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=zero]').click();
    cy.get('[data-cy=equals]').click();

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "2000");

  })

  it('1.5 plus 2.7 equals 4.2', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=decimal]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=plus]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=decimal]').click();
    cy.get('[data-cy=seven]').click();
    cy.get('[data-cy=equals]').click();

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "4.2");

  })


  it('should allow only one decimal per number', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=decimal]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=decimal]').click();
    cy.get('[data-cy=two]').click();
    

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "1.52");

  })



  it('AC should reset screen to zero', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=one]').click();
    cy.get('[data-cy=decimal]').click();
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=AC]').click();
    
    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "0");

  })

  it('5 times 3 equals 15 times 2 equals 30', () => {
    // 1. ARRANGE
    cy.visit('http://127.0.0.1:5503/index.html');

    // 2. ACT
    cy.get('[data-cy=five]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=three]').click();
    cy.get('[data-cy=equals]').click();
    cy.get('[data-cy=multiply]').click();
    cy.get('[data-cy=two]').click();
    cy.get('[data-cy=equals]').click();

    // 3. ASSERT
    cy.get('[data-cy=cur-num]').should("contain", "30");

  })




})