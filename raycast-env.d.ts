/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {
  /** Mealie URL - Base URL of your Mealie instance, for example https://mealie.example.org */
  "mealieUrl": string,
  /** API Token - Mealie API token. Create one in Mealie under Settings, API Tokens. */
  "apiToken": string,
  /** Insecure Connections - Only enable this if your Mealie instance is reachable over HTTP inside a trusted network. Your API token is sent unencrypted. */
  "allowInsecureHttp": boolean
}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `search-recipes` command */
  export type SearchRecipes = ExtensionPreferences & {}
  /** Preferences accessible in the `add-to-shopping-list` command */
  export type AddToShoppingList = ExtensionPreferences & {}
  /** Preferences accessible in the `shopping-lists` command */
  export type ShoppingLists = ExtensionPreferences & {}
  /** Preferences accessible in the `meal-plan` command */
  export type MealPlan = ExtensionPreferences & {}
  /** Preferences accessible in the `import-recipe` command */
  export type ImportRecipe = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `search-recipes` command */
  export type SearchRecipes = {}
  /** Arguments passed to the `add-to-shopping-list` command */
  export type AddToShoppingList = {}
  /** Arguments passed to the `shopping-lists` command */
  export type ShoppingLists = {}
  /** Arguments passed to the `meal-plan` command */
  export type MealPlan = {}
  /** Arguments passed to the `import-recipe` command */
  export type ImportRecipe = {}
}

