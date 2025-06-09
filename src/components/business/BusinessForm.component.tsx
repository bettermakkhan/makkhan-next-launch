"use client";

import React from "react";
import { Form, Input, Select, Button, Typography, Rate, Divider } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
import { tagRender } from "@utils/formHelpers";

const { Title } = Typography;
const { TextArea } = Input;

type CreatorFormProps = {};

const BusinessForm: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <Title level={2}>🧈Makkhan for Businesses</Title>
      <div>
        <p
          style={{ marginBottom: "2px", color: "#616670" }}
          className="font-semibold"
        >
          We’re not an agency. We’re the stage.
        </p>
        <p style={{ color: "#616670", marginTop: "0" }}>
          An attempt to build a clean, clutter-free platform where creators and
          businesses connect with zero friction, full trust, and pure
          discoverability. When ideas meet opportunity - that's the Makkhan
          Moment ✨
        </p>
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
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              (First Name) - (Middle Name) - (Last Name)
            </p>
            <Input size="large" placeholder="Your full name" />
          </span>
        </Form.Item>

        <Form.Item
          label="Name of your business -"
          name="businessName"
          rules={[{ required: true, message: "Please enter your full name" }]}
        >
          <span>
            <Input size="large" placeholder="Your business name" />
          </span>
        </Form.Item>

        <Form.Item
          label="Email ID -"
          name="email"
          rules={[
            { required: true, message: "Please enter your email" },
            { type: "email", message: "Please enter a valid email" },
          ]}
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              Don't worry, we hate spam too so real updates and no fluff.
            </p>
            <Input size="large" placeholder="your@email.com" />
          </span>
        </Form.Item>

        <Form.Item
          label="Phone Number -"
          name="phone"
          rules={[{ message: "Please enter your phone number" }]}
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              Optional since we respect your number and your peace.
            </p>
            <Input size="large" placeholder="+1 (XXX) XXX-XXXX" />
          </span>
        </Form.Item>

        <Form.Item
          label="About you and the kind of collaboration you would want -"
          name="about"
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              Spill the butter, no matter what the vibe or project is, we're
              here for it!
            </p>
            <TextArea
              rows={3}
              placeholder="Tell us about your business, the kind of collaborations you are looking for, and any specific requirements you have."
            />
          </span>
        </Form.Item>

        <Divider />

        <Title level={4}>
          Just so that we can filter it all out for you! 😌
        </Title>

        <Form.Item
          label="Pick your playground. What space does your brand play in?"
          name="category"
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              Choose whatever fits :)
            </p>
            <Select
              size="large"
              placeholder=""
              mode="multiple"
              showSearch
              tagRender={tagRender}
              optionFilterProp="label"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "Fashion & Apparel", label: "Fashion & Apparel" },
                { value: "Beauty & Skincare", label: "Beauty & Skincare" },
                { value: "Fitness & Wellness", label: "Fitness & Wellness" },
                { value: "Food & Beverage", label: "Food & Beverage" },
                {
                  value: "Travel & Experiences",
                  label: "Travel & Experiences",
                },
                {
                  value: "Sustainable & Purpose-Led",
                  label: "Sustainable & Purpose-Led",
                },
                { value: "Lifestyle & Home", label: "Lifestyle & Home" },
                {
                  value: "Art, Culture & Design",
                  label: "Art, Culture & Design",
                },
                {
                  value: "Tech or Digital Tools",
                  label: "Tech or Digital Tools",
                },
                { value: "Events or Gifting", label: "Events or Gifting" },
                { value: "Premium products", label: "Premium products" },
              ]}
            />
          </span>
        </Form.Item>

        <Form.Item label="Others, if any..." name="others">
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="What's the collab vibe that you would be looking for?"
          name="collab_vibe"
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              Pick as many as you'd like
            </p>
            <Select
              size="large"
              placeholder=""
              mode="multiple"
              showSearch
              tagRender={tagRender}
              optionFilterProp="label"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                {
                  value: "User Generated Content (UGC)",
                  label: "User Generated Content (UGC)",
                },
                {
                  value: "Barter Collaborations",
                  label: "Barter Collaborations",
                },
                { value: "Paid Collaborations", label: "Paid Collaborations" },
                {
                  value: "Long-term Ambassadors",
                  label: "Long-term Ambassadors",
                },
                {
                  value: "Campaign Partnerships (Multi-Creator)",
                  label: "Campaign Partnerships (Multi-Creator)",
                },
                {
                  value: "Reviews & Testimonials",
                  label: "Reviews & Testimonials",
                },
                { value: "One-off Projects", label: "One-off Projects" },
              ]}
            />
          </span>
        </Form.Item>

        <Form.Item label="Anything we missed?" name="anything_missed">
          <Input size="large" />
        </Form.Item>

        <Form.Item
          label="What's your ideal project turnaround time?"
          name="turnaround_time"
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              So we can match you with creators who can sync with your timelines
              🧈⌛
            </p>
            <Select
              size="large"
              placeholder=""
              mode="multiple"
              showSearch
              tagRender={tagRender}
              optionFilterProp="label"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "0-3 days", label: "0-3 days" },
                { value: "3-5 days", label: "3-5 days" },
                { value: "1 week +", label: "1 week +" },
              ]}
            />
          </span>
        </Form.Item>

        <Form.Item
          label="How involved would you like to be in the content creation process?"
          name="business_involvement"
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              Setting the expectations so we know what creators may work best
              for you!
            </p>
            <Select
              size="large"
              placeholder=""
              mode="multiple"
              showSearch
              tagRender={tagRender}
              optionFilterProp="label"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "A detailed brief", label: "A detailed brief" },
                {
                  value: "Trusting the creator entirely",
                  label: "Trusting the creator entirely",
                },
                {
                  value: "Full script given by you",
                  label: "Full script given by you",
                },
                {
                  value: "Happy to co-create and brainstorm",
                  label: "Happy to co-create and brainstorm",
                },
              ]}
            />
          </span>
        </Form.Item>

        <Divider />

        <Title level={4}>
          Anything else you would want to bring to the party? 🎉
        </Title>

        <Form.Item
          label="You can tell us anything on your mind...."
          name="miscellaneous"
        >
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              It could be a suggestion, critique, or maybe even some tea 👀
            </p>
            <TextArea
              rows={4}
              placeholder="Feel free to share any additional information, questions, or comments you have for us."
            />
          </span>
        </Form.Item>

        <Form.Item label="How are you feeling today?" name="feeling">
          <span>
            <p style={{ color: "#616670" }} className="pb-2">
              Just checking up on you :)
            </p>
            <Rate />
          </span>
        </Form.Item>

        <div className="flex justify-between items-center">
          <Form.Item>
            <Button type="link" icon={<ReloadOutlined />}>
              Clear form
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              color="default"
              variant="solid"
            >
              Submit
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default BusinessForm;
