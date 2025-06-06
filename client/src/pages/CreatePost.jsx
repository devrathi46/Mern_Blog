import { Alert, Button, FileInput, Select, TextInput, Textarea } from 'flowbite-react';
import { useState } from 'react';

export default function CreatePost() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.size > 2 * 1024 * 1024) {
      setError('Image must be less than 2MB');
      setFile(null);
    } else {
      setError(null);
      setFile(selectedFile);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category || !formData.content) {
      setError('Please fill all fields');
      return;
    }
    console.log({
      ...formData,
      imagePreview: file ? URL.createObjectURL(file) : null,
    });
    alert('Post submitted (check console for data)');
  };

  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <TextInput
            type='text'
            placeholder='Title'
            required
            id='title'
            className='flex-1'
            onChange={handleChange}
          />
          <Select id='category' required onChange={handleChange}>
            <option value=''>Select a category</option>
            <option value='javascript'>JavaScript</option>
            <option value='reactjs'>React.js</option>
            <option value='nextjs'>Next.js</option>
          </Select>
        </div>

        <FileInput
          type='file'
          accept='image/*'
          onChange={handleFileChange}
        />
        {file && (
          <img
            src={URL.createObjectURL(file)}
            alt='Preview'
            className='w-full h-72 object-cover rounded-md'
          />
        )}

        <Textarea
          id='content'
          placeholder='Write your post...'
          rows={10}
          onChange={handleChange}
          required
        />

        {error && <Alert color='failure'>{error}</Alert>}

        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>
      </form>
    </div>
  );
}
