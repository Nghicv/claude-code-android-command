#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const CLAUDE_DIR = '.claude';
const COMMANDS_DIR = 'commands';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(childItemName => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

function main() {
  console.log('🚀 Installing Claude Code Android Commands...\n');

  const currentDir = process.cwd();
  const packageDir = path.dirname(__dirname);
  const sourcePath = path.join(packageDir, CLAUDE_DIR);
  const destPath = path.join(currentDir, CLAUDE_DIR);

  // Check if source .claude directory exists
  if (!fs.existsSync(sourcePath)) {
    console.error('❌ Error: .claude directory not found in package');
    process.exit(1);
  }

  // Check if .claude already exists in target
  if (fs.existsSync(destPath)) {
    const commandsPath = path.join(destPath, COMMANDS_DIR);

    if (fs.existsSync(commandsPath)) {
      console.log('⚠️  .claude/commands directory already exists');
      console.log('   Files will be merged. Existing files with same names will be overwritten.\n');
    } else {
      // Create commands directory if .claude exists but commands doesn't
      fs.mkdirSync(commandsPath, { recursive: true });
    }
  }

  try {
    // Copy .claude directory
    copyRecursiveSync(sourcePath, destPath);

    console.log('✅ Successfully installed Claude Code Android Commands!\n');
    console.log('📁 Commands installed to:', path.relative(currentDir, destPath));
    console.log('\n📝 Available commands:');
    console.log('   /commit - Commit with formatting check (no push)');
    console.log('   /cp     - Commit and push with formatting check');
    console.log('   /pr     - Commit, push, and create pull request');
    console.log('\n💡 These commands are now available in Claude Code for this project.');

  } catch (error) {
    console.error('❌ Error installing commands:', error.message);
    process.exit(1);
  }
}

main();
