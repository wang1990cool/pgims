package edu.ahut.util.pdf;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import org.apache.poi.xwpf.converter.pdf.PdfOptions;
import org.apache.poi.xwpf.converter.pdf.PdfConverter;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.struts2.ServletActionContext;

public class WordToHtml {

	public static void WordtoiText(final String sampleFileName,
			boolean emulatePictureStorage) {
		String fileName = sampleFileName.substring(0,sampleFileName.indexOf('.'));
		String pdfFileName = fileName + ".pdf";

		File f = new File(pdfFileName);
		if (f.exists())
			return;
		else {

			PdfOptions options = PdfOptions.create().fontEncoding("UTF-8");
			try {

				// 1) Load docx with POI XWPFDocument
				// XWPFDocument document = new XWPFDocument(
				// data.class.getResourceAsStream( "456.docx" ) );
				XWPFDocument document = new XWPFDocument(ServletActionContext
						.getServletContext().getResourceAsStream(
								"uploadfiles//files//456.docx"));

				// 2) Convert POI XWPFDocument 2 PDF with iText
				File outFile = new File("d:/DocxBig.pdf");
				outFile.getParentFile().mkdirs();

				OutputStream out = new FileOutputStream(outFile);

				PdfConverter.getInstance().convert(document, out, options);
			} catch (Throwable e) {
				e.printStackTrace();
			}
			// options.fontProvider( new IFontProvider() {
			//
			// public Font getFont( String familyName, String encoding, float
			// size, int style, Color color )
			// {
			// try
			// {
			// BaseFont bfChinese = BaseFont.createFont(
			// "c:/Windows/Fonts/arialuni.ttf", BaseFont.IDENTITY_H,
			// BaseFont.EMBEDDED );
			// Font fontChinese = new Font( bfChinese, size, style, color );
			// if ( familyName != null )
			// fontChinese.setFamily( familyName );
			// return fontChinese;
			// }
			// catch ( Throwable e )
			// {
			// e.printStackTrace();
			// return ITextFontRegistry.getRegistry().getFont( familyName,
			// encoding, size, style, color );
			// }
			// }
			// } );

			// if (f.getName().endsWith(".docx") ||
			// f.getName().endsWith(".DOCX")) {

			// 1) Load DOCX into XWPFDocument

			// XWPFDocument document = null;
			// try {
			// InputStream in = new FileInputStream(f);
			// byte[] b = new byte[100];
			// in.read(b, 0, 100);
			// // XWPFDocument document;
			// try {
			//
			// document = new XWPFDocument(in);
			// } catch (Exception e) {
			// e.printStackTrace();
			// }
			//
			//
			// OutputStream out=new FileOutputStream(pdfFileName);
			// PdfOptions
			// PDFVialOption=PdfOptions.create().fontEncoding("UniGB-UCS2-H");
			// PdfConverter.getInstance().convert(document, out,PDFVialOption);
			// }
			// catch(IOException e)
			// {
			// e.printStackTrace();
			// }

			// }

		}

		// HWPFDocument hwpfDocument = new HWPFDocument(new FileInputStream(f)
		// );
		// // XWPFDocument xhwpfDocument=new XWPFDocument(new
		// FileInputStream(f));
		// Document newDocument = DocumentBuilderFactory.newInstance()
		// .newDocumentBuilder().newDocument();
		// WordToHtmlConverter wordToHtmlConverter = new WordToHtmlConverter(
		// newDocument );
		//
		// if ( emulatePictureStorage )
		// {
		// wordToHtmlConverter.setPicturesManager(new PicturesManager()
		// {
		// public String savePicture( byte[] content,
		// PictureType pictureType, String suggestedName,
		// float widthInches, float heightInches )
		// {
		// return suggestedName;
		// }
		// } );
		// }
		//
		// wordToHtmlConverter.processDocument( hwpfDocument );
		// // wordToHtmlConverter.processDocument(xhwpfDocument);
		//
		// StringWriter stringWriter = new StringWriter();
		//
		// Transformer transformer = TransformerFactory.newInstance()
		// .newTransformer();
		// transformer.setOutputProperty( OutputKeys.INDENT, "yes" );
		// transformer.setOutputProperty( OutputKeys.ENCODING, "utf-8" );
		// transformer.setOutputProperty( OutputKeys.METHOD, "html" );
		// transformer.transform(
		// new DOMSource( wordToHtmlConverter.getDocument() ),
		// new StreamResult( stringWriter ) );
		//
		// String result = stringWriter.toString();
		// return result;
	}
}
