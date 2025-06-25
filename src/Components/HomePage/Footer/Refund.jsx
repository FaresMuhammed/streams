import Footer from "./Footer";

export default function Refund() {

  return (
    <div className="mt-5" style={{ backgroundColor: '#FAFAFA'}}>

        <div className="d-flex p-3" style={{ flexDirection: "column"}}>

            <div className="mt-5 mb-4">
                <h4 className="fw-bold mb-4 mt-2">Refund and Returns Policy</h4>
                <li className="fw-bold mb-3">Case 1: Incorrect Product Received</li>
                <ul>
                    <li>If the customer receives an incorrect product, they are entitled to a refund, provided the product is in its original condition upon receipt.</li>
                    <li>Returns must be made within 14 days from the date of purchase.</li>
                </ul>

                <li className="fw-bold mb-3">Case 2: Defective Product</li>
                <ul>
                    <li>If the customer receives a defective product, they have the right to exchange or return it within 30 days from the date of notification.</li>
                    <li>The product must be returned or exchanged within 14 days, with a full refund provided, without any additional compensation or costs.</li>
                </ul>

                <li className="fw-bold mb-3">General Conditions:</li>
                <ul>
                    <li>The customer has the right to exchange or return a product within 14 days from the date of purchase, unless the product is defective as outlined in Case 2.</li>
                    <li>For returns, the product will be collected after verifying the purchase invoice and the product’s condition. The refund will be processed using the original payment method within 3 to 8 working days.</li>
                    <li>The product cannot be returned if its condition differs from when it was received unless the customer reports the issue within 24 hours of receipt via social media or WhatsApp.</li>
                    <li>Refunds will be processed using the original payment method, with an administrative fee of 1.85% of the product value for electronic payment service providers.</li>
                    <li>For installment payments, the refund will be processed using the same method, with a 3% administrative fee of the product value for electronic payment service providers.</li>
                    <li>Shipping costs are non-refundable when a product is returned.</li>
                    <p></p>
                </ul>
            </div>
        </div>

      <Footer className={"color-white"}/>
    </div>
  );
}
