"use client";

import React from "react";
import { Form, Input, Select, Button, Typography, Divider } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { TextArea } = Input;

const CreatorForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Title level={2}>Makkhan for Creators</Title>
      <div>
        <Title level={5} style={{ marginBottom: "2px" }}>We’re not an agency. We’re the stage.</Title>
        <Title level={5} type="secondary" style={{ marginTop: "0" }}>
          An attempt to build a clean, clutter-free platform where creators and
          businesses connect with zero friction, full trust, and pure
          discoverability. When ideas meet opportunity - that's the Makkhan
          Moment{" "}
        </Title>
      </div>
      <Divider />
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        className="space-y-6"
      >
        <Form.Item
          label="What should we call you?"
          name="fullName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <Input size="large" placeholder="Your full name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <Input size="large" placeholder="your@email.com" />
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            { required: true, message: "Please enter your phone number" },
          ]}
        >
          <Input size="large" placeholder="+1 (XXX) XXX-XXXX" />
        </Form.Item>

        <Form.Item
          label="Instagram Handle"
          name="instagram"
          rules={[
            {
              required: true,
              message: "Please enter your Instagram handle",
            },
          ]}
        >
          <Input size="large" placeholder="@yourusername" />
        </Form.Item>

        <Form.Item
          label="Content Category"
          name="category"
          rules={[
            {
              required: true,
              message: "Please select your content category",
            },
          ]}
        >
          <Select
            size="large"
            placeholder="Select your main content category"
            options={[
              { value: "fashion", label: "Fashion & Style" },
              { value: "beauty", label: "Beauty" },
              { value: "lifestyle", label: "Lifestyle" },
              { value: "food", label: "Food & Cooking" },
              { value: "travel", label: "Travel" },
              { value: "fitness", label: "Fitness & Health" },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Tell us about yourself and your content"
          name="bio"
          rules={[{ required: true, message: "Please tell us about yourself" }]}
        >
          <TextArea
            rows={4}
            placeholder="Share your story, content style, and what makes you unique..."
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            icon={<PlusOutlined />}
            className="w-full bg-blue-600 hover:bg-blue-700"
          >
            Submit Application
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreatorForm;
