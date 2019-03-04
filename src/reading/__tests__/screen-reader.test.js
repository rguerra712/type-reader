import {
  isTextReadyToRead,
  getLastWord,
} from '../screen-reader';

describe('should be ready when ending in a space', () => {
  it.each`
  text | expected
  ${undefined} | ${false}
  ${''} | ${false}
  ${'word'} | ${false}
  ${'word1 and word2'} | ${false}
  ${' spaceAtBeginning'} | ${false}
  ${'spaceAtEnd '} | ${true}
  ${'word1 and word2 '} | ${true}
  ${'periodAtEnd.'} | ${true}
  ${'word and period.'} | ${true}
  
  `('should return $expected for case $text', ({text, expected}) => {
    // Arrange

    // Act
    const ready = isTextReadyToRead(text);

    // Assert
    expect(ready).toBe(expected);
  });
});

describe('should give the last word if one exists', () => {
  it.each `
  text | expected
  ${undefined} | ${undefined}
  ${''} | ${''}
  ${'word'} | ${'word'}
  ${'word1 and word2'} | ${'word2'}
  ${' spaceAtBeginning'} | ${'spaceAtBeginning'}
  ${'spaceAtEnd '} | ${'spaceAtEnd'}
  ${'word1 and word2 '} | ${'word2'}
  `('should return $expected for case $text', ({
    text,
    expected
  }) => {
    // Arrange

    // Act
    const ready = getLastWord(text);

    // Assert
    expect(ready).toBe(expected);
  });
});
