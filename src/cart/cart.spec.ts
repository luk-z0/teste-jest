import Product from "../products/product"
import Cart from "./cart"

const makeCart = (): Cart => {
  return new Cart
}

const makeProduct = (name: string, price: number): Product => {
  return new Product(name, price)
}

const makeSut = () => {
  const sut = makeCart()

  return {
    sut
  }
}

describe('Cart', () => {
  it('should empty cart', () => {
    const { sut } = makeSut()
    expect(sut.items.length).toBe(0)
  })

  it('should has one item in cart', () => {
    const { sut } = makeSut()
    sut.addItem(makeProduct('carro', 10))
  })

  it('should has two item in cart', () => {
    const { sut } = makeSut()
    sut.addItem(makeProduct('carro', 10))
    sut.addItem(makeProduct('boneca', 25))
  })

  it('should have one item if add two and remove one', () => {
    const { sut } = makeSut()
    const product = makeProduct('algema', 100)

    sut.addItem(product)
    sut.addItem(makeProduct('arma', 2000))

    expect(sut.items.length).toBe(2)
    sut.removeItem(product)
    expect(sut.items.length).toBe(1)
  })

  it('should empty if add two and remove one', () => {
    const { sut } = makeSut()
    const product = makeProduct('algema', 100)
    const productTwo = makeProduct('arma', 2000)

    sut.addItem(product)
    sut.addItem(makeProduct('arma', 2000))
    expect(sut.items.length).toBe(2)
    sut.removeItem(product)
    sut.removeItem(productTwo)

    expect(sut.isEmpty).toBeTruthy
  })
})
