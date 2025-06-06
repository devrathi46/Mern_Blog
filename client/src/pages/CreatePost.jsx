import { Button, FileInput, Select, TextInput, Label, Textarea } from 'flowbite-react';

export default function CreatePost() {
  return (
    <div className='p-3 max-w-3xl mx-auto min-h-screen'>
      <h1 className='text-center text-3xl my-7 font-semibold'>Create a post</h1>
      <form className='flex flex-col gap-4'>
        {/* Title and Category */}
        <div className='flex flex-col gap-4 sm:flex-row justify-between'>
          <div className='w-full sm:w-2/3'>
            <Label htmlFor='title' value='Post Title' />
            <TextInput
              type='text'
              placeholder='Title'
              required
              id='title'
              name='title'
              className='w-full'
            />
          </div>
          <div className='w-full sm:w-1/3'>
            <Label htmlFor='category' value='Category' />
            <Select id='category' name='category' required>
              <option value=''>Select a category</option>
              <option value='javascript'>JavaScript</option>
              <option value='reactjs'>React.js</option>
              <option value='nextjs'>Next.js</option>
            </Select>
          </div>
        </div>

        {/* Image Upload */}
        <div className='flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3'>
          <FileInput type='file' accept='image/*' name='image' />
          <Button
            type='button'
            gradientDuoTone='purpleToBlue'
            size='sm'
            outline
          >
            Upload image
          </Button>
        </div>

        {/* Post Content */}
        <div>
          <Label htmlFor='content' value='Content' />
          <Textarea
            id='content'
            name='content'
            placeholder='Write your post here...'
            required
            rows={12}
            className='resize-none'
          />
        </div>

        {/* Submit */}
        <Button type='submit' gradientDuoTone='purpleToPink'>
          Publish
        </Button>
      </form>
    </div>
  );
}
