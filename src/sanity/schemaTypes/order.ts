import { defineType, defineField } from "sanity";

export const orderSchema = defineType({
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    defineField({ name: "orderId", title: "Order ID", type: "string", validation: (Rule) => Rule.required() }),
    defineField({
      name: "customerDetails",
      title: "Customer Details",
      type: "object",
      fields: [
        { name: "name", title: "Full Name", type: "string", validation: (Rule) => Rule.required() },
        { name: "email", title: "Email", type: "string", validation: (Rule) => Rule.required().email() },
        { name: "phone", title: "Phone Number", type: "string", validation: (Rule) => Rule.required() },
      ],
    }),
    defineField({
      name: "productDetails",
      title: "Product Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "productId", title: "Product ID", type: "string", validation: (Rule) => Rule.required() },
            { name: "title", title: "Product Name", type: "string" },
            { name: "quantity", title: "Quantity", type: "number", validation: (Rule) => Rule.required().min(1) },
            { name: "price", title: "Price", type: "number", validation: (Rule) => Rule.required() },
          ],
        },
      ],
    }),
    defineField({
      name: "orderStatus",
      title: "Order Status",
      type: "string",
      options: { list: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"] },
      initialValue: "Pending",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "deliveryInformation",
      title: "Delivery Information",
      type: "object",
      fields: [
        { name: "address", title: "Address", type: "string", validation: (Rule) => Rule.required() },
        { name: "city", title: "City", type: "string", validation: (Rule) => Rule.required() },
        { name: "state", title: "State", type: "string", validation: (Rule) => Rule.required() },
        { name: "zipCode", title: "Zip Code", type: "string", validation: (Rule) => Rule.required() },
        { name: "country", title: "Country", type: "string", validation: (Rule) => Rule.required() },
      ],
    }),
    defineField({ name: "paymentStatus", title: "Payment Status", type: "string", options: { list: ["Paid", "Unpaid", "Refunded"] }, initialValue: "Unpaid", validation: (Rule) => Rule.required() }),
    defineField({ name: "createdAt", title: "Order Date", type: "datetime", initialValue: new Date().toISOString(), readOnly: true }),
  ],
});
