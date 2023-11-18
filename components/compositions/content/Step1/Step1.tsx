import { Button } from "@/components/atoms/Button/Button"
import { Card } from "@/components/atoms/Card/Card"
import { Input } from "@/components/atoms/forms/Input/Input"
import { Heading } from "@/components/atoms/typography/Heading/Heading"
import { Label } from "@/components/atoms/typography/Label/Label"
import { Text } from "@/components/atoms/typography/Text/Text"
import { Component } from "@/shared/types"

interface Step1Props extends Component {}

export function Step1({ className = "", testId }: Step1Props) {
  return (
    <Card className={`px-32 py-16 flex flex-col ${className}`} data-testid={testId}>
      <Heading tag="h1">Personal Info</Heading>
      <Text>Please provide your name, email address, and phone number.</Text>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <Label>Name</Label>
          <Input />
        </div>
        <div className="flex flex-col">
          <Label>Email Address</Label>
          <Input />
        </div>
        <div className="flex flex-col">
          <Label>Phone Number</Label>
          <Input />
        </div>
      </div>
      <div className="flex flex-grow-1" />
      <div className="flex justify-end">
        <Button>Next Step</Button>
      </div>
    </Card>
  )
}
