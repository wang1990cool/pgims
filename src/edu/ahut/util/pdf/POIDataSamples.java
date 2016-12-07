package edu.ahut.util.pdf;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;

public final class POIDataSamples {

//	private boolean _sampleDataIsAvaliableOnClassPath = true;
	private static POIDataSamples _instDocument;

	public static POIDataSamples getDocumentInstance() {
		if (_instDocument == null)
			_instDocument = new POIDataSamples();
		return _instDocument;
	}

	public InputStream openResourceAsStream(String sampleFileName) {
		File f = getFile(sampleFileName);
		try {
			return new FileInputStream(f);
		} catch (FileNotFoundException e) {
			throw new RuntimeException(e);
		}
	}

	public File getFile(String sampleFileName) {
		File f = new File(sampleFileName);
		if (!f.exists()) {
			throw new RuntimeException("Sample file '" + sampleFileName
					+ "' not found in data dir ");
		}
		try {
			if (sampleFileName.length() > 0) {
				String fn = sampleFileName;
				if (fn.indexOf('/') > 0) {
					fn = fn.substring(fn.indexOf('/') + 1);
				}
				if (!fn.equals(f.getCanonicalFile().getName())) {
					throw new RuntimeException(
							"File name is case-sensitive: requested '" + fn
									+ "' but actual file is '"
									+ f.getCanonicalFile().getName() + "'");
				}
			}
		} catch (IOException e) {
			throw new RuntimeException(e);
		}
		return f;
	}
}