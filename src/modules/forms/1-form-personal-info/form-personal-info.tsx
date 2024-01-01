import { Input } from "@/components/ui";
import { Field } from "formik";

export function PersonalInfoForm(): JSX.Element {
  const metadatas = [
    {
      name: "name",
      type: "name",
      label: "Name",
      placeholder: "eg Stephan King",
    },
    {
      name: "email",
      type: "email",
      label: "Email Address",
      placeholder: "e.g. stephenking@lorem.com",
    },
    {
      name: "phone",
      type: "tel",
      label: "Phone Number",
      placeholder: "e.g. +1 234 567 890",
    },
  ];

  return (
    <>
      {metadatas.map((metaData) => (
        <Field
          id={metaData.name}
          key={metaData.name}
          name={metaData.name}
          type={metaData.type}
          label={metaData.label}
          placeholder={metaData.placeholder}
          component={Input}
        />
      ))}
    </>
  );
}
