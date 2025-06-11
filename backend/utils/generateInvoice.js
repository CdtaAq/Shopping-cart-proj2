const PDFDocument = require("pdfkit");
const fs = require("fs");

function generateInvoice(order, user, filepath) {
  const doc = new PDFDocument();

  doc.pipe(fs.createWriteStream(filepath));

  doc.fontSize(20).text("Invoice", { align: "center" });

  doc.moveDown();
  doc.fontSize(12).text(`Name: ${user.name}`);
  doc.text(`Email: ${user.email}`);
  doc.text(`Date: ${new Date(order.date).toLocaleString()}`);
  doc.moveDown();

  doc.text("Items:");

  order.items.forEach((item, i) => {
    doc.text(`${i + 1}. ${item.name} x${item.quantity} - $${item.price}`);
  });

  doc.moveDown();
  doc.text(`Total: $${order.totalAmount}`, { align: "right" });

  doc.end();
}

module.exports = generateInvoice;
