import micromatch from 'micromatch';
import prettier from 'prettier';

const prettierSupportedExtensions = prettier
  .getSupportInfo()
  .languages.map((language) => language)
  .flat();

const eslintSupportedExtensions = ['.ts', '.tsx', '.js'];

const addQuotes = (value) => `'${value}'`;
const addGlobToExtension = (extensions) => extensions.map((extension) => `**/*${extension}`);

export default (stagedFiles) => {
  // Match files for ESLint including dirs and files starting with dot.
  const eslintFiles = micromatch(stagedFiles, addGlobToExtension(eslintSupportedExtensions));

  // Match files for Prettier including dirs and files starting with dot.
  const prettierFiles = micromatch(stagedFiles, addGlobToExtension(prettierSupportedExtensions));

  const linters = [];

  if (eslintFiles.length > 0) linters.push(`eslint --fix ${eslintFiles.map(addQuotes).join(' ')}`);

  if (prettierFiles.length > 0) linters.push(`prettier --write ${prettierFiles.map(addQuotes).join(' ')}`);

  return linters;
};
