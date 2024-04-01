import { Banner, Services } from "../../../components/HomePages"
import "@/style/checkout.css"

const CheckOut = () => {
    return (
        <>
            <Banner />
            <section className="checkout">
                <div className="container">
                    <div className="checkout-block">
                        <div className="bill">
                            <h2 className="bill-heading">Billing details</h2>
                            <form className="form-bill">
                                <div className="bill-full-name">
                                    <div className="bill-block">
                                        <p className="bill-block__name">First Name</p>
                                        <input type="text" className="bill-block-input" />
                                    </div>
                                    <div className="bill-block">
                                        <p className="bill-block__name">Last Name</p>
                                        <input type="text" className="bill-block-input" />
                                    </div>
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">Company Name (Optional)</span>
                                    <input type="text" className="bill-body__input" />
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">Country / Region</span>
                                    <select name="" id="" className="bill-body__input">
                                        <option value="" />
                                    </select>
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">Street address</span>
                                    <input type="text" className="bill-body__input" />
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">Town / City</span>
                                    <input type="text" className="bill-body__input" />
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">Province</span>
                                    <select name="" id="" className="bill-body__input">
                                        <option value="" />
                                        <option value="" />
                                    </select>
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">ZIP code</span>
                                    <input type="text" className="bill-body__input" />
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">Phone</span>
                                    <input type="text" className="bill-body__input" />
                                </div>
                                <div className="bill-body">
                                    <span className="bill-body__name">Email address</span>
                                    <input type="text" className="bill-body__input" />
                                </div>
                                <div className="bill-body">
                                    <input type="text" className="bill-body__input" placeholder="Additional information" />
                                </div>
                            </form>
                        </div>
                        <div className="bill-products">
                            <div className="bill-products-heading">
                                <div className="bill-products-heading__left">
                                    <p className="heading__left--title">Product</p>
                                    <p className="heading__left--text color">Asgaard sofa</p>
                                    <p className="heading__left--text">Subtotal</p>
                                    <p className="heading__left--text">Total</p>
                                </div>
                                <div className="bill-products-heading__right">
                                    <p className="heading__right--title">Subtotal</p>
                                    <p className="heading__right--text">25.000.000đ</p>
                                    <p className="heading__right--text">25.000.000đ</p>
                                    <p className="heading__right--text orange">250.00.000đ</p>
                                </div>
                            </div>
                            <div className="bill-products-desc">
                                <p className="desc__title">Direct Bank Transfer</p>
                                <p className="desc__text--color">
                                    Make your payment directly into our bank account. Please use your Order ID as the payment
                                    reference.
                                    Your order will not be shipped until the funds have cleared in our account.
                                </p>
                                <div className="desc-check">
                                    <input className="desc__input" type="radio" /> <span className="desc__input--color">Direct Bank
                                        Transfer</span>
                                </div>
                                <div className="desc-check">
                                    <input className="desc__input" type="radio" /> <span className="desc__input--color">Cash On
                                        Delivery</span>
                                </div>
                                <div className="desc__text">Your personal data will be used to support your experience throughout
                                    this
                                    website,
                                    to manage access to your account, and for other purposes described in our <strong>privacy
                                        policy</strong>.
                                </div>
                                <button className="desc__btn">Place order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Services />
        </>


    )
}

export default CheckOut