# AcommerceApp

A modern, cross-platform e-commerce mobile application built with NativeScript and React.

## Features

- 📱 Cross-platform (iOS & Android)
- 🛍️ Product browsing and listing
- 🔍 Product details view
- 🛒 Shopping cart functionality
- 💳 Checkout process
- 🎨 Modern UI with Tailwind CSS

## Prerequisites

- Node.js 14 or later
- NativeScript CLI
- iOS and/or Android development environment set up

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development preview:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/         # React components
│   ├── screens/       # Screen components
│   └── MainStack.tsx  # Navigation setup
├── app.ts             # Application entry point
├── app.css            # Global styles
└── NavigationParamList.ts  # Navigation types
```

## Available Scripts

- `npm run preview` - Start the NativeScript preview
- `npm run dev` - Alias for preview command
- `npm run type-check` - Run TypeScript type checking

## Technology Stack

- NativeScript 8.x
- React 18.x
- React NativeScript Navigation
- Tailwind CSS
- TypeScript

## Contributing
We welcome contributions from the community! 🎉 If you'd like to contribute, please follow the guidelines below.

## #📌 How to Contribute

1. **Fork the Repository**
   - Click the 'Fork' button at the top right of this repository.
   - This will create a copy of the repository under your GitHub account.

2. **Clone Your Fork**
   - Clone the forked repository to your local machine.
   ```sh
   git clone https://github.com/your-username/ecommerce-app.git
   cd ecommerce-app
   ```

3. **Create a New Branch**
   - Branch names should be descriptive (e.g., `feature-add-cart` or `bugfix-checkout`).
   ```sh
   git checkout -b your-branch-name
   ```

4. **Make Your Changes**
   - Implement your changes, ensuring they align with project guidelines.
   - Follow coding best practices and add comments where necessary.
   - If adding a new feature, update the documentation accordingly.

5. **Commit Your Changes**
   - Write clear, concise commit messages.
   ```sh
   git add .
   git commit -m "Add feature: shopping cart functionality"
   ```

6. **Push Your Changes**
   - Push the branch to your forked repository.
   ```sh
   git push origin your-branch-name
   ```

7. **Submit a Pull Request**
   - Go to the original repository on GitHub.
   - Click on 'Pull Requests' and then 'New Pull Request'.
   - Select your branch and submit the pull request for review.

###💡 Contribution Guidelines

- Ensure all code follows best practices and project coding standards.
- Keep pull requests focused on one feature or fix at a time.
- Add tests where applicable.
- Keep changes backward-compatible where possible.
- Respect other contributors and maintain a positive environment.

###🛠️ Issue Reporting

If you find a bug or have a feature request, please open an issue:
1. Navigate to the 'Issues' tab in the repository.
2. Click on 'New Issue'.
3. Provide a clear title and detailed description.
4. Add labels (bug, enhancement, documentation, etc.).

## 🤝 Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md), ensuring a welcoming and respectful environment for all contributors.


## License

This project is licensed under the MIT License - see the LICENSE file for details.
