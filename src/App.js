import logo from './logo.svg';
import './App.css';
import { Document, Page, PDFViewer, PDFDownloadLink, Text } from '@react-pdf/renderer'

function App() {
  return (
    <div className="App">
      <PDFViewer style={{
        width:'100%',
        height:'100vh'
      }}>
        <Document>
          <Page>
            <Text>Hello</Text>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default App;
