<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep imported homepage markup and interaction state in its TanStack route, with captured CSS and media separate, to preserve source structure during focused repairs.
- Keep imported same-site destinations on the preview origin with original paths, queries and fragments; do not redirect unimported pages to the source site.
