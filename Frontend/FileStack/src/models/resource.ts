/**
 * Created by johnny on 21/07/2017.
 */
export class Resource {
  name: string;
  size: number;
  link: string;
  constructor(theName: string, theSize: number) {
    this.name = theName;
    this.size = theSize;
    this.link = `http://localhost:3000/api/Containers/container1/download/${theName}`;
  }
  getReadableSize() {
    const name = this.name;
    const size = this.size;
    if (size < 1024*1024) {
      return `${(size/1024).toFixed(2)} kb`
    }else if (size < 1024*1024*1024) {
      return `${(size/1024/1024).toFixed(2)} mb`
    }else {
      return `${(size/1024/1024/1024).toFixed(2)} gb`
    }
  };

  static create(json: Object) {
    return new Resource(json['name'], json['size'])
  }
}
