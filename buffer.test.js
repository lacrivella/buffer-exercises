describe('buffer test', () => {
  it('creates a buffer of length 10', () => {
    const buf = Buffer.alloc(10);
    expect(buf).toHaveLength(10)
  }); 

  it('creates a buffer from a string', () => {
    Buffer.from().toString()
  });
});