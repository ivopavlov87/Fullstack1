class Api::PostsController < ApplicationController
  
  def index
    @posts = Post.all
    render :index
  end

  def show
    @post = Post.find(params[:id])

    if @post
      render :show
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  def create
    @post = Post.new(post_params)

    if @post.save
      render :show
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])

    if @post.update(post_params)
      render :edit
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @posts = Post.all
    @post = Post.find(params[:id])

    if @post
      @post.destroy
      render :index
    else
      render json: @post.errors.full_messages, status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:photo, :caption, :user_id)
  end

end
