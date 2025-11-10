-- Fix boards RLS policy to restrict visibility to owners only
DROP POLICY IF EXISTS "Boards are viewable by everyone" ON public.boards;

CREATE POLICY "Users can view own boards"
  ON public.boards FOR SELECT
  USING (auth.uid() = owner_id);