package edu.ahut.util.pdf;

import java.io.IOException;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.ExceptionConverter;
import com.itextpdf.text.Font;
import com.itextpdf.text.Image;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.BaseFont;
import com.itextpdf.text.pdf.ColumnText;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfPageEventHelper;
import com.itextpdf.text.pdf.PdfTemplate;
import com.itextpdf.text.pdf.PdfWriter;
import com.itextpdf.text.pdf.Barcode;
import com.itextpdf.text.pdf.Barcode39;
import com.itextpdf.text.pdf.PdfContentByte;

public class TableHeader extends PdfPageEventHelper {
	private String header;
	private PdfTemplate total;
	private String barcode;

	public void setHeader(String header) {
		this.header = header;
	}

	public void setBarCode(String code) {
		this.barcode = code;
	}

	public void onOpenDocument(PdfWriter writer, Document document) {
		total = writer.getDirectContent().createTemplate(30, 16);
	}

	public void onEndPage(PdfWriter writer, Document document) {
		if (writer.getCurrentPageNumber() > 1) {
			try {
				// 设置PDF表格字体
				BaseFont baseFontChinese;

				baseFontChinese = BaseFont.createFont("STSong-Light",
						"UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
				Font fontChinese = new Font(baseFontChinese, 12, Font.NORMAL);

				// 设置PDF页眉表头表格
				PdfPTable table = new PdfPTable(4);
				table.setWidths(new int[] { 10, 24, 10, 3 });
				table.setTotalWidth(527);
				table.setLockedWidth(true);
				table.getDefaultCell().setFixedHeight(20);
				table.getDefaultCell().setVerticalAlignment(Element.ALIGN_BOTTOM);

				// 设置PDF文件条码

				Barcode39 codeEAN = new Barcode39();
				// codeEAN.setCode(footer);
				PdfContentByte cb = writer.getDirectContent();

//				Rectangle rect = new Rectangle(36, 10, 80, 30);

				codeEAN.setCodeType(Barcode.UPCA);
				codeEAN.setCode(this.barcode);
				PdfPCell cell = new PdfPCell();
				codeEAN.setBarHeight(20);
				cell.addElement(codeEAN.createImageWithBarcode(cb, null, null));
				cell.setHorizontalAlignment(Element.ALIGN_LEFT);
				cell.setBorder(PdfPCell.BOTTOM);
				table.addCell(cell);

				// 填写设置文件标题
				Paragraph title = new Paragraph(header, fontChinese);
				title.setAlignment(Element.ALIGN_CENTER);
				cell = new PdfPCell(title);
				cell.setHorizontalAlignment(Element.ALIGN_CENTER);
				cell.setVerticalAlignment(Element.ALIGN_BOTTOM);

				cell.setBorder(PdfPCell.BOTTOM);
				table.addCell(cell);

				// 设置PDF文件页码
				String pageString = String.format("第%d页,",writer.getCurrentPageNumber() - 1);
				Paragraph pageNum = new Paragraph(pageString, fontChinese);

				PdfPCell cell1 = new PdfPCell(pageNum);
				cell1.setHorizontalAlignment(Element.ALIGN_RIGHT);
				cell1.setVerticalAlignment(Element.ALIGN_BOTTOM);
				cell1.setBorder(PdfPCell.BOTTOM);
				table.addCell(cell1);
				cell = new PdfPCell(Image.getInstance(total));
				cell.setVerticalAlignment(Element.ALIGN_BOTTOM);
				cell.setBorder(PdfPCell.BOTTOM);
				table.addCell(cell);
				table.writeSelectedRows(0, -1, 34, 803,writer.getDirectContent());
			} catch (DocumentException e) {
				throw new ExceptionConverter(e);
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}

	public void onCloseDocument(PdfWriter writer, Document document) {
		if (writer.getCurrentPageNumber() > 1) {
			BaseFont baseFontChinese;

			try {
				baseFontChinese = BaseFont.createFont("STSong-Light",
						"UniGB-UCS2-H", BaseFont.NOT_EMBEDDED);
				Font fontChinese = new Font(baseFontChinese, 12, Font.NORMAL);
				Phrase p = new Phrase();
				p.setFont(fontChinese);
				p.add("共" + String.valueOf(writer.getPageNumber() - 2) + "页");

				// 关闭document的时候获取总页数，并把总页数按模版写道之前预留的位置
				// total.beginText();
				// total.setFontAndSize(bf, 8);
				// total.showText(Integer.toString(writer.getPageNumber() -
				// 1)+"页");
				// total.endText();
				// total.closePath();//sanityCheck();
				total.setFontAndSize(baseFontChinese, 12);
				ColumnText.showTextAligned(total, Element.ALIGN_LEFT, p, 0, 2,0);
			} catch (DocumentException e) {
				e.printStackTrace();
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
	}
}
