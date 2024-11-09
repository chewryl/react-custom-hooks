import { Input, Dropdown, Button } from "@/components";
import useForm from "@/hooks/useForm";
import { validations } from "@/util/validationHelper";

const PersonalDetailsForm = ({ title }) => {
  const initialData = {
    FirstName: "",
    LastName: "",
    Email: "",
    ReceiveMarketing: false
  };

  // Validations
  const validationSchema = {
    FirstName: [
      {
        validator: validations.required,
        message: "First name is required"
      },
      {
        validator: (value) => validations.minLength(value, 2),
        message: "First name must be at least two characters"
      }
    ],
    Email: [
      {
        validator: validations.required,
        message: "Email is required"
      },
      { validator: validations.email, message: "Invalid email" }
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
          <Input
            label="First Name"
            placeholder="John"
            name="FirstName"
            onChange={handleInputChange}
            value={formData.FirstName}
            {...validationProps("FirstName")}
          />
          <Input
            label="Last Name"
            placeholder="Doe"
            name="LastName"
            onChange={handleInputChange}
            value={formData.LastName}
            {...validationProps("LastName")}
          />
          <Input
            label="Email"
            placeholder="Email"
            name="Email"
            onChange={handleInputChange}
            value={formData.Email}
            {...validationProps("Email")}
          />

          <Dropdown
            label="Would you like to receive marketing emails from us?"
            name="ReceiveMarketing"
            onChange={handleInputChange}
            value={formData.ReceiveMarketing}
            items={[
              { label: "Yes", value: true },
              { label: "No", value: false }
            ]}
            isRequired={false}
            isValid={true}
          />

          <Button type="submit" text="Submit" />
        </form>
      </div>
    </>
  );
};

export default PersonalDetailsForm;
