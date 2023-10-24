import { NextResponse } from "next/server";
import connectDB from "@/app/connection";
import { Cart } from "@/lib/models/cart";

export async function GET() {
  await connectDB();
  const list = await Cart.find({});
  console.log(list);
  return NextResponse.json({ data: list });
}

export async function POST(req) {
  const { image, category, title, description, price } = await req.json();
  const item = new Cart({
    image,
    category,
    title,
    description,
    price,
  });
  await connectDB();
  await item.save();
  return NextResponse.json({ success: true });
}

export async function DELETE(req) {
  await connectDB();
  await Cart.findOneAndDelete(await req.json());
  return NextResponse.json({ success: true });
}
