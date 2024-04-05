
import axios from 'axios';

export const Create_user = () => {
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const reader = new FileReader();
    reader.onload = async () => {
      const jsonData = reader.result;
      try {
        const response = await axios.post('http://localhost:8000/upload_data', {
          jsonData: jsonData
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error al enviar el archivo:', error);
      }
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileChange} />
    </div>
  );
};
