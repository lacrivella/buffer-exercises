describe('buffer test', () => {
  it('creates a buffer of length 10', () => {
    const buf = Buffer.alloc(10);
    expect(buf).toHaveLength(10)
  }); 

  it('creates a buffer from a string', () => {
    const buf = Buffer.from('hi there');

    expect(buf).toHaveLength(8);
    expect(buf.toString()).toEqual('hi there');

    const hexBuf = buf.map(() => 104);
    expect(hexBuf.toString()).toEqual('hhhhhhhh');
  });

  it('creates a buffer from hex code', () => {
    const smile = Buffer.from([0xF0, 0x9F, 0x98, 0x81]);
    console.log(smile.toString());

    expect(smile.toString()).toEqual('😁')
  });
});