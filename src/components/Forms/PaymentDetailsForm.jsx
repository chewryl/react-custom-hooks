import { Input, Button } from "@/components";
import useForm from "@/hooks/useForm";
import { validations } from "@/util/validationHelper";

const PaymentDetailsForm = ({ title }) => {
  const initialData = {
    CardNumber: "",
    CardHolderName: "",
    CardExpiry: "",
    CardCVC: false
  };

  // Validations
  const validationSchema = {
    CardNumber: [
      {
        validator: validations.required,
        message: "Card number is required"
      },
      {
        validator: validations.number,
        message: "Card number must contain numbers only"
      }
    ],
    CardExpiry: [
      {
        validator: validations.required,
        message: "Card expiry is required"
      },
      {
        validator: (value) => validations.numberExact(value, 4),
        message: "Card expiry must be four digits"
      }
    ],
    CardCVC: [
      {
        validator: validations.required,
        message: "CVC is required"
      },
      {
        validator: (value) => validations.numberExact(value, 3),
        message: "CVC must be three digits"
      }
    ]
  };

  // Custom Hook useForm for state management and validation handling
  const { formData, handleInputChange, handleSubmit, validationProps } =
    useForm(initialData, () => console.log(formData), validationSchema);

  return (
    <>
      <div className="bg-white rounded-md p-6">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold text-orange-600 pb-4">
            {title}
          </h2>
          <div className="flex flex-col">
            <Input
              label="Card Number"
              placeholder="Card Number"
              name="CardNumber"
              onChange={handleInputChange}
              value={formData.CardNumber}
              {...validationProps("CardNumber")}
              type="number"
            />
            <Input
              label="Cardholder Name"
              placeholder="Cardholder Name"
              name="CardHolderName"
              onChange={handleInputChange}
              value={formData.CardHolderName}
              {...validationProps("CardHolderName")}
            />
            <div className="flex gap-1.5">
              <div className="w-1/3">
                <Input
                  label="Expiry"
                  placeholder="MM/YY"
                  name="CardExpiry"
                  onChange={handleInputChange}
                  value={formData.CardExpiry}
                  {...validationProps("CardExpiry")}
                  type="number"
                />
              </div>
              <div className="w-1/3">
                <Input
                  label="CVC"
                  placeholder="CVC"
                  name="CardCVC"
                  onChange={handleInputChange}
                  value={formData.CardCVC}
                  {...validationProps("CardCVC")}
                  type="number"
                />
              </div>
            </div>

            <Button text="Submit" />
          </div>
        </form>
      </div>
    </>
  );
};

export default PaymentDetailsForm;
